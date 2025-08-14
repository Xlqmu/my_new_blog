import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
    try {
        // 获取所有内容并生成搜索索引
        const [blogPosts, diaryEntries, zuegEntries] = await Promise.all([
            getCollection("blog"),
            getCollection("diary"),
            getCollection("zueg")
        ]);

        // 构建搜索索引
        const searchIndex = [
            // 博客文章
            ...blogPosts.map(post => ({
                id: post.id,
                title: post.data.title,
                description: post.data.description,
                content: post.body || "",
                url: `/blog/${post.id}`,
                type: "博客",
                date: post.data.pubDate.toISOString().split('T')[0],
                tags: post.data.tags || [],
                category: post.data.category || "未分类"
            })),
            
            // 日记条目
            ...diaryEntries.map(entry => {
                let url = `/diary/${entry.id}`;
                let type = "日记";
                
                // 根据文件路径确定具体类型和URL
                if (entry.id.startsWith("daily/")) {
                    type = "每日日记";
                    url = `/diary/daily/${entry.id.replace("daily/", "")}`;
                } else if (entry.id.startsWith("weekly/")) {
                    type = "周记";
                    url = `/diary/weekly/${entry.id.replace("weekly/", "")}`;
                } else if (entry.id.startsWith("monthly/")) {
                    type = "月记";
                    url = `/diary/monthly/${entry.id.replace("monthly/", "")}`;
                } else if (entry.id.startsWith("annual/")) {
                    type = "年度总结";
                    url = `/diary/annual/${entry.id.replace("annual/", "")}`;
                }
                
                return {
                    id: entry.id,
                    title: entry.data.title,
                    description: entry.data.description || "",
                    content: entry.body || "",
                    url: url,
                    type: type,
                    date: entry.data.pubDate.toISOString().split('T')[0],
                    tags: entry.data.tags || [],
                    mood: entry.data.mood || "",
                    location: entry.data.location || ""
                };
            }),
            
            // 随笔条目
            ...zuegEntries.map(entry => {
                let url = `/zueg/${entry.id}`;
                let type = "随笔";
                
                // 根据文件路径确定具体类型和URL
                if (entry.id.startsWith("software/")) {
                    type = "软件随笔";
                    url = `/zueg/software/${entry.id.replace("software/", "")}`;
                } else if (entry.id.startsWith("hardware/")) {
                    type = "硬件随笔";
                    url = `/zueg/hardware/${entry.id.replace("hardware/", "")}`;
                } else if (entry.id.startsWith("website/")) {
                    type = "网站随笔";
                    url = `/zueg/website/${entry.id.replace("website/", "")}`;
                } else if (entry.id.startsWith("algorithm/")) {
                    type = "算法随笔";
                    url = `/zueg/algorithm/${entry.id.replace("algorithm/", "")}`;
                }
                
                return {
                    id: entry.id,
                    title: entry.data.title,
                    description: entry.data.description,
                    content: entry.body || "",
                    url: url,
                    type: type,
                    date: entry.data.pubDate.toISOString().split('T')[0],
                    tags: entry.data.tags || [],
                    category: entry.data.category || ""
                };
            })
        ];

        return new Response(JSON.stringify(searchIndex), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("搜索索引生成错误:", error);
        return new Response(JSON.stringify([]), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
};

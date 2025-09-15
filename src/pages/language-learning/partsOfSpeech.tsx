import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const allPartsOfSpeech = graphql`
    query allWords {
        allGoogleTutoringSheet {
            nodes {
                partOfSpeech
            }
        }
    }
`;

type PartOfSpeech = {
    partOfSpeech: string;
};
export default function PartsOfSpeech() {
    const parts = useStaticQuery(allPartsOfSpeech);

    console.log("parts", parts);

    const data: { name: string; value: number }[] =
        parts.allGoogleTutoringSheet.nodes
            .filter(
                (node: PartOfSpeech) =>
                    node.partOfSpeech && node.partOfSpeech.trim() !== "",
            )
            .map((node: PartOfSpeech) => node.partOfSpeech || "Unknown")
            .reduce((acc: any, part: string) => {
                const found = acc.find((item: any) => item.name === part);
                if (found) {
                    found.value += 1;
                } else {
                    acc.push({ name: part, value: 1 });
                }
                return acc;
            }, []);

    const COLORS = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#A28BFF",
        "#FF7AB6",
        "#9AD0F5",
        "#C7F9D8",
        "#FFD8A8",
        "#B0BEC5",
    ];
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Tooltip
                        formatter={(value: any, name: any, props: any) => [
                            value,
                            props?.payload?.name,
                        ]}
                    />
                    <Pie
                        nameKey="name"
                        dataKey="value"
                        data={data}
                        fill="#8884d8"
                        label
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

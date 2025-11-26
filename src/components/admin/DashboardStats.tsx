import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type StatItem = {
    label: string;
    value: string | number;
    icon: LucideIcon;
};

interface DashboardStatsProps {
    stats: StatItem[];
}

export const DashboardStats = ({ stats }: DashboardStatsProps) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ label, value, icon: Icon }) => (
                <Card key={label} className="border border-border/60 bg-card shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">{label}</CardTitle>
                        <Icon className="w-4 h-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-semibold text-foreground">{value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

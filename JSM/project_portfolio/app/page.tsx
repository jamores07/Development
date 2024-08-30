import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to My Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl">
            Hi, I'm John Amores. I'm a web developer specializing in React and Next.js.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
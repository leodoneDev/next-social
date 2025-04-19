import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

function NotificationSkeleton() {

  const skeletonItems = Array.from({ length: 5 }, (_, i) => 1);

  return (
    <div className="space-y-4">
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Notifications</CardTitle>
                    <Skeleton  className="h-4 w-20" />
                </div>
            </CardHeader>
            <CardContent>
                <ScrollArea>
                    
                </ScrollArea>
            </CardContent>
        </Card>
    </div>
  )
}

export default NotificationSkeleton
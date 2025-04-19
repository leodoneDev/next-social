"use client";

import NotificationSkeleton from "@/components/NotificationSkeleton";
import { useEffect, useState } from "react";

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {

    }
    
    fetchNotifications()
  }, [])

  if(isLoading) return <NotificationSkeleton />
  return (
    <div>NotificationsPage</div>
  )
}

export default NotificationsPage
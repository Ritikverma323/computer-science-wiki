"use client";

import VisitorCount from "../../components/VisitorCount";
import BlogLayout from "../../components/BlogLayout";

export default function VisitorsPage() {
    return (
        <BlogLayout title="Visitor Statistics">
            <div className="visitor-page">
                <p className="visitor-description">
                    Track daily and total visitor counts for our blog. Each page visit can be manually tracked
                    or we can show you the current statistics.
                </p>

                <VisitorCount />

                <div className="visitor-info">
                    <h4>How it works:</h4>
                    <ul>
                        <li>Click "Track Visit" to increment the visitor count</li>
                        <li>Daily counts reset each day at midnight</li>
                        <li>Total count accumulates all visits since the start</li>
                        <li>Data is stored locally in the application</li>
                    </ul>
                </div>
            </div>
        </BlogLayout>
    );
}

"use client";

import { useState, useEffect } from 'react';

interface VisitorStats {
    todayVisitors: number;
    totalVisitors: number;
}

export default function VisitorCount({ simple = false }: { simple?: boolean }) {
    const [stats, setStats] = useState<VisitorStats>({
        todayVisitors: 0,
        totalVisitors: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        trackVisit();
    }, []);

    const trackVisit = async () => {
        try {
            const response = await fetch('/api/visitor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();

            if (data.success) {
                setStats({
                    todayVisitors: data.todayVisitors,
                    totalVisitors: data.totalVisitors
                });
            }
        } catch (error) {
            console.error('Error tracking visit:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="visitor-count-simple">
                <span>Visitors Today: Loading...</span>
            </div>
        );
    }

    if (simple) {
        return (
            <div className="visitor-count-simple">
                <span>Visitors Today: <strong>{stats.todayVisitors}</strong> | Total: <strong>{stats.totalVisitors}</strong></span>
            </div>
        );
    }

    return (
        <div className="visitor-count">
            <div className="visitor-count-header">
                <h3>Visitor Statistics</h3>
            </div>

            <div className="visitor-stats">
                <div className="stat-item">
                    <span className="stat-label">Today:</span>
                    <span className="stat-value">{stats.todayVisitors}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Total:</span>
                    <span className="stat-value">{stats.totalVisitors}</span>
                </div>
            </div>

            <div className="visitor-info">
                <p>This page automatically tracks visits when loaded.</p>
            </div>
        </div>
    );
}
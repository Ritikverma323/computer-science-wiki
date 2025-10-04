import { NextRequest, NextResponse } from 'next/server';
import { updateVisitorData, getTodayVisitorCount, getTotalVisitorCount } from '../../../lib/visitorUtils';

export async function POST(request: NextRequest) {
    try {
        console.log('request', request?.headers.get('cookie'));
        const visitorData = updateVisitorData();

        return NextResponse.json({
            success: true,
            todayVisitors: visitorData.dailyVisitors[new Date().toISOString().split('T')[0]] || 0,
            totalVisitors: visitorData.totalVisitors,
            lastVisit: visitorData.lastVisit
        });
    } catch (error) {
        console.error('Error updating visitor data:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to update visitor count' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const todayVisitors = getTodayVisitorCount();
        const totalVisitors = getTotalVisitorCount();

        return NextResponse.json({
            success: true,
            todayVisitors,
            totalVisitors
        });
    } catch (error) {
        console.error('Error getting visitor data:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to get visitor count' },
            { status: 500 }
        );
    }
}

import fs from 'fs';
import path from 'path';

export interface VisitorData {
    dailyVisitors: Record<string, number>;
    totalVisitors: number;
    lastVisit: string | null;
}

const VISITOR_DATA_PATH = path.join(process.cwd(), 'src/data/visitorData.json');

export function getVisitorData(): VisitorData {
    try {
        const data = fs.readFileSync(VISITOR_DATA_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return {
            dailyVisitors: {},
            totalVisitors: 0,
            lastVisit: null
        };
    }
}

export function updateVisitorData(): VisitorData {
    const today = new Date().toISOString().split('T')[0]; 
    const visitorData = getVisitorData();

    visitorData.dailyVisitors[today] = (visitorData.dailyVisitors[today] || 0) + 1;
    visitorData.totalVisitors += 1;
    visitorData.lastVisit = new Date().toISOString();

    fs.writeFileSync(VISITOR_DATA_PATH, JSON.stringify(visitorData, null, 2));

    return visitorData;
}

export function getTodayVisitorCount(): number {
    const today = new Date().toISOString().split('T')[0];
    const visitorData = getVisitorData();
    return visitorData.dailyVisitors[today] || 0;
}

export function getTotalVisitorCount(): number {
    const visitorData = getVisitorData();
    return visitorData.totalVisitors;
}

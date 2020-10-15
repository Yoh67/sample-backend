import {app} from '../driver';

// Generic GET handler
export function GET(url: string, handler: (request: any) => any) {
    app.get(url, async (request, response) => {
        try {
            const data = await handler(request);
            response.json({
                success: true,
                data
            });
        } catch (error) {
            response.json({
                success: false,
                error: error.message || error
            });
        }
    });
}

// Generic POST handler
export function POST(url: string, handler: (request: any) => any) {
    app.post(url, async (request, response) => {
        try {
            const data = await handler(request);
            response.json({
                success: true,
                data
            });
        } catch (error) {
            response.json({
                success: false,
                error: error.message || error
            });
        }
    });
}

// Generic PUT handler
export function PUT(url: string, handler: (request: any) => any) {
    app.put(url, async (request, response) => {
        try {
            const data = await handler(request);
            response.json({
                success: true,
                data
            });
        } catch (error) {
            response.json({
                success: false,
                error: error.message || error
            });
        }
    });
}

// Generic DELTE handler
export function DELETE(url: string, handler: (request: any) => any) {
    app.delete(url, async (request, response) => {
        try {
            const data = await handler(request);
            response.json({
                success: true,
                data
            });
        } catch (error) {
            response.json({
                success: false,
                error: error.message || error
            });
        }
    });
}
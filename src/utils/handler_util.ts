import passport from 'passport';
import {app} from '../app';

// GET handler
export function GET(url: string, handler: (request: any) => any) {
    app.get(
        url,
        passport.authenticate('basic', {session: false}),
        async (request, response) => {
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

// POST handler
export function POST(url: string, handler: (request: any) => any) {
    app.post(
        url,
        passport.authenticate('basic', {session: false}),
        async (request, response) => {
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

// PUT handler
export function PUT(url: string, handler: (request: any) => any) {
    app.put(
        url,
        passport.authenticate('basic', {session: false}),
        async (request, response) => {
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

// DELTE handler
export function DELETE(url: string, handler: (request: any) => any) {
    app.delete(
        url,
        passport.authenticate('basic', {session: false}),
        async (request, response) => {
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
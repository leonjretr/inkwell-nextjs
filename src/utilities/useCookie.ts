import { useState, useCallback } from 'react';

export function useCookie(cookieName: string) {
    const [cookieValue, setCookieValue] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCookie = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/auth/get-cookie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cookieName }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch cookie');
            }

            const data = await response.json();
            setCookieValue(data.cookieValue || null);
            console.log("Should be JWT: " + data)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            setCookieValue(null);
        } finally {
            setIsLoading(false);
        }
    }, [cookieName]);

    return { cookieValue, isLoading, error, fetchCookie };
}
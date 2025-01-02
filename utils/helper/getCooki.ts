export const getTokenFromCookie = (): string | null => {
    const match = document.cookie.match(/(^| )token=([^;]+)/);
    return match ? match[2] : null;
  };
  
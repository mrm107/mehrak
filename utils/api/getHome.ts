
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getHome = async () => {
  const res = await fetch(`${API_URL}/home`, {
    next: { revalidate: 3600 }, // کش شدن به مدت 3600 ثانیه (1 ساعت)
  });
  return res.json();
};

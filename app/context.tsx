// context.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

// تایپ داده‌ها
interface AppContextType {
  hasPassword: boolean;
  setHasPassword: (value: boolean) => void; // تابع برای تغییر مقدار
}

// ایجاد Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider برای ارائه داده‌ها
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [hasPassword, setHasPassword] = useState<boolean>(false); // مقدار اولیه

  return (
    <AppContext.Provider value={{ hasPassword, setHasPassword }}>
      {children}
    </AppContext.Provider>
  );
};

// هوک برای دسترسی به داده‌های Context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

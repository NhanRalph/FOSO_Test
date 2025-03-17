"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import LoadingSpinner from "../components/components_v2/Loading/Loading";

interface AuthContextType {
  isAuthenticated: boolean;
  role: string | null;
  login: (data: { accessToken: string; refreshToken: string; roles: string }) => void;
  logout: () => void;
  flagChange: boolean;
  setFlagChange: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenLogin: boolean;
  setIsOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenRegister: boolean;
  setIsOpenRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [flagChange, setFlagChange] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedRole = localStorage.getItem("roles");
      if (savedRole) {
        setIsAuthenticated(true);
        setRole(savedRole);
      }
    }
    setIsLoading(false);
  }, []);

  const login = (data: { accessToken: string; refreshToken: string; roles: string }) => {
    setIsAuthenticated(true);
    setRole(data.roles);
    if (typeof window !== "undefined") {
      localStorage.setItem("roles", data.roles);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("roles");
    }
    document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout, flagChange, setFlagChange, isOpenLogin, setIsOpenLogin, isOpenRegister, setIsOpenRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

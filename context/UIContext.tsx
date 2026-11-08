'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProjectItem } from '@/lib/data';

interface UIContextType {
  isQuoteModalOpen: boolean;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  isServiceModalOpen: boolean;
  activeServiceKey: string | null;
  openServiceModal: (key: string) => void;
  closeServiceModal: () => void;
  isLightboxOpen: boolean;
  activeProject: ProjectItem | null;
  openLightbox: (project: ProjectItem) => void;
  closeLightbox: () => void;
  toastMessage: string | null;
  showToast: (msg: string, type?: string) => void;
  selectedService: string;
  setSelectedService: (service: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeServiceKey, setActiveServiceKey] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [toastTimer, setToastTimer] = useState<NodeJS.Timeout | null>(null);

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const openServiceModal = (key: string) => {
    setActiveServiceKey(key);
  };

  const closeServiceModal = () => {
    setActiveServiceKey(null);
  };

  const openLightbox = (project: ProjectItem) => {
    setActiveProject(project);
  };

  const closeLightbox = () => {
    setActiveProject(null);
  };

  const showToast = (msg: string, _type?: string) => {
    if (toastTimer) clearTimeout(toastTimer);
    setToastMessage(msg);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 4500);
    setToastTimer(timer);
  };

  return (
    <UIContext.Provider
      value={{
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        isServiceModalOpen: !!activeServiceKey,
        activeServiceKey,
        openServiceModal,
        closeServiceModal,
        isLightboxOpen: !!activeProject,
        activeProject,
        openLightbox,
        closeLightbox,
        toastMessage,
        showToast,
        selectedService,
        setSelectedService,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}

import { get } from "@/config/axiosConfig";
import { create } from "zustand";
import { AxiosError } from "axios";
import handleApiError from "@/helper/apiErrorHandler";
import { Listing } from "@/constant/interfaces/listing";

interface ISiteStore {
  sites: Listing[];
  site: Listing | null;
  sitesLoading: boolean;
  siteLoading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  fetchSites: (token: string, page?: number, limit?: number, sort?: string, order?: string) => void;
  fetchSite: (id: string, token: string) => void;
}

const useSiteStore = create<ISiteStore>((set) => ({
  sites: [],
  site: null,
  sitesLoading: false,
  siteLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,

  fetchSites: async (token: string) => {
    set({ sitesLoading: true, error: null });
    try {
      const { data } = await get<Listing[]>(`/listings/listings/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set({ sites: data });
    } catch (error) {
      const errorMessage = handleApiError(error as AxiosError);
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ sitesLoading: false });
    }
  },

  fetchSite: async (id: string, token: string) => {
    set({ siteLoading: true, error: null });
    try {
      const { data } = await get<Listing>(`/listings/listings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ site: data });
    } catch (error) {
      const errorMessage = handleApiError(error as AxiosError);
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ siteLoading: false });
    }
  },
}));

export default useSiteStore;
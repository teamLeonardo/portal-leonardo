import { service } from "service";
import useSWR from "swr";

export const usePortafolio = {
    get: useSWR(service.portafolio.getQuery)
}
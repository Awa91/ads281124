import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { client } from '../api/client';

//export const fetchEnNs1 = async () : Promise<AxiosResponse>=>{
export const fetchEnNs1 = async () : Promise<AxiosResponse>=>{
return await client.get('');

}

export const useFetchEnNs1 = (): QueryObserverResult =>{
    return useQuery({
        queryFn: async () => {
			const { data } = await fetchEnNs1();
			return data;
		},
		queryKey: [ 'en-ns1' ]
    });
}
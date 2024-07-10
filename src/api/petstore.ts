/**
 * Generated by orval v6.5.3 🍺
 * Do not edit manually.
 * Swagger Petstore
 * This is a sample Petstore server.  You can find 
out more about Swagger at 
[http://swagger.io](http://swagger.io) or on 
[irc.freenode.net, #swagger](http://swagger.io/irc/).

 * OpenAPI spec version: 1.0.0
 */
import axios,{
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from 'react-query'
import type {
  PetBody,
  Pet,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  UpdatePetWithFormBody,
  ApiResponse,
  UploadFileBody,
  GetInventory200,
  Order,
  User,
  UserArrayBody,
  LoginUserParams
} from './model'
import {
  rest
} from 'msw'
import faker from 'faker'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


/**
 * @summary Add a new pet to the store
 */
export const addPet = (
    petBody: PetBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.post(
      `/pet`,
      petBody,options
    );
  }



    export const useAddPet = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof addPet>, TError,{data: PetBody}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof addPet>, {data: PetBody}> = (props) => {
          const {data} = props || {};

          return  addPet(data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof addPet>, TError, {data: PetBody}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * @summary Update an existing pet
 */
export const updatePet = (
    petBody: PetBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.put(
      `/pet`,
      petBody,options
    );
  }



    export const useUpdatePet = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof updatePet>, TError,{data: PetBody}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof updatePet>, {data: PetBody}> = (props) => {
          const {data} = props || {};

          return  updatePet(data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof updatePet>, TError, {data: PetBody}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatus = (
    params?: FindPetsByStatusParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet[]>> => {
    return axios.get(
      `/pet/findByStatus`,{
        params,
    ...options}
    );
  }


export const getFindPetsByStatusQueryKey = (params?: FindPetsByStatusParams,) => [`/pet/findByStatus`, ...(params ? [params]: [])];

    
export const useFindPetsByStatus = <TData = AsyncReturnType<typeof findPetsByStatus>, TError = AxiosError<void>>(
 params?: FindPetsByStatusParams, options?: { query?:UseQueryOptions<AsyncReturnType<typeof findPetsByStatus>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getFindPetsByStatusQueryKey(params);

  

  const queryFn: QueryFunction<AsyncReturnType<typeof findPetsByStatus>> = () => findPetsByStatus(params, axiosOptions);

  const query = useQuery<AsyncReturnType<typeof findPetsByStatus>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}


/**
 * Muliple tags can be provided with comma separated strings. Use\ \ tag1, tag2, tag3 for testing.
 * @deprecated
 * @summary Finds Pets by tags
 */
export const findPetsByTags = (
    params?: FindPetsByTagsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet[]>> => {
    return axios.get(
      `/pet/findByTags`,{
        params,
    ...options}
    );
  }


export const getFindPetsByTagsQueryKey = (params?: FindPetsByTagsParams,) => [`/pet/findByTags`, ...(params ? [params]: [])];

    
export const useFindPetsByTags = <TData = AsyncReturnType<typeof findPetsByTags>, TError = AxiosError<void>>(
 params?: FindPetsByTagsParams, options?: { query?:UseQueryOptions<AsyncReturnType<typeof findPetsByTags>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getFindPetsByTagsQueryKey(params);

  

  const queryFn: QueryFunction<AsyncReturnType<typeof findPetsByTags>> = () => findPetsByTags(params, axiosOptions);

  const query = useQuery<AsyncReturnType<typeof findPetsByTags>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}


/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetById = (
    petId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet>> => {
    return axios.get(
      `/pet/${petId}`,options
    );
  }


export const getGetPetByIdQueryKey = (petId: number,) => [`/pet/${petId}`];

    
export const useGetPetById = <TData = AsyncReturnType<typeof getPetById>, TError = AxiosError<void>>(
 petId: number, options?: { query?:UseQueryOptions<AsyncReturnType<typeof getPetById>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetPetByIdQueryKey(petId);

  

  const queryFn: QueryFunction<AsyncReturnType<typeof getPetById>> = () => getPetById(petId, axiosOptions);

  const query = useQuery<AsyncReturnType<typeof getPetById>, TError, TData>(queryKey, queryFn, {enabled: !!(petId), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}


/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithForm = (
    petId: number,
    updatePetWithFormBody: UpdatePetWithFormBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {const formUrlEncoded = new URLSearchParams();
if(updatePetWithFormBody.name !== undefined) {
 formUrlEncoded.append('name', updatePetWithFormBody.name)
 }
if(updatePetWithFormBody.status !== undefined) {
 formUrlEncoded.append('status', updatePetWithFormBody.status)
 }

    return axios.post(
      `/pet/${petId}`,
      formUrlEncoded,options
    );
  }



    export const useUpdatePetWithForm = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof updatePetWithForm>, TError,{petId: number;data: UpdatePetWithFormBody}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof updatePetWithForm>, {petId: number;data: UpdatePetWithFormBody}> = (props) => {
          const {petId,data} = props || {};

          return  updatePetWithForm(petId,data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof updatePetWithForm>, TError, {petId: number;data: UpdatePetWithFormBody}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * @summary Deletes a pet
 */
export const deletePet = (
    petId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.delete(
      `/pet/${petId}`,options
    );
  }



    export const useDeletePet = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof deletePet>, TError,{petId: number}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof deletePet>, {petId: number}> = (props) => {
          const {petId} = props || {};

          return  deletePet(petId,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof deletePet>, TError, {petId: number}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * @summary uploads an image
 */
export const uploadFile = (
    petId: number,
    uploadFileBody: UploadFileBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ApiResponse>> => {const formData = new FormData();
if(uploadFileBody.additionalMetadata !== undefined) {
 formData.append('additionalMetadata', uploadFileBody.additionalMetadata)
 }
if(uploadFileBody.file !== undefined) {
 formData.append('file', uploadFileBody.file)
 }

    return axios.post(
      `/pet/${petId}/uploadImage`,
      formData,options
    );
  }



    export const useUploadFile = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof uploadFile>, TError,{petId: number;data: UploadFileBody}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof uploadFile>, {petId: number;data: UploadFileBody}> = (props) => {
          const {petId,data} = props || {};

          return  uploadFile(petId,data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof uploadFile>, TError, {petId: number;data: UploadFileBody}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export const getInventory = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetInventory200>> => {
    return axios.get(
      `/store/inventory`,options
    );
  }


export const getGetInventoryQueryKey = () => [`/store/inventory`];

    
export const useGetInventory = <TData = AsyncReturnType<typeof getInventory>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<AsyncReturnType<typeof getInventory>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetInventoryQueryKey();

  

  const queryFn: QueryFunction<AsyncReturnType<typeof getInventory>> = () => getInventory(axiosOptions);

  const query = useQuery<AsyncReturnType<typeof getInventory>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}


/**
 * @summary Place an order for a pet
 */
export const placeOrder = (
    order: Order, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Order>> => {
    return axios.post(
      `/store/order`,
      order,options
    );
  }



    export const usePlaceOrder = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof placeOrder>, TError,{data: Order}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof placeOrder>, {data: Order}> = (props) => {
          const {data} = props || {};

          return  placeOrder(data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof placeOrder>, TError, {data: Order}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * For valid response try integer IDs with value >= 1 and <= 10.\ \ Other values will generated exceptions
 * @summary Find purchase order by ID
 */
export const getOrderById = (
    orderId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Order>> => {
    return axios.get(
      `/store/order/${orderId}`,options
    );
  }


export const getGetOrderByIdQueryKey = (orderId: number,) => [`/store/order/${orderId}`];

    
export const useGetOrderById = <TData = AsyncReturnType<typeof getOrderById>, TError = AxiosError<void>>(
 orderId: number, options?: { query?:UseQueryOptions<AsyncReturnType<typeof getOrderById>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetOrderByIdQueryKey(orderId);

  

  const queryFn: QueryFunction<AsyncReturnType<typeof getOrderById>> = () => getOrderById(orderId, axiosOptions);

  const query = useQuery<AsyncReturnType<typeof getOrderById>, TError, TData>(queryKey, queryFn, {enabled: !!(orderId), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}


/**
 * For valid response try integer IDs with positive integer value.\ \ Negative or non-integer values will generate API errors
 * @summary Delete purchase order by ID
 */
export const deleteOrder = (
    orderId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.delete(
      `/store/order/${orderId}`,options
    );
  }



    export const useDeleteOrder = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof deleteOrder>, TError,{orderId: number}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof deleteOrder>, {orderId: number}> = (props) => {
          const {orderId} = props || {};

          return  deleteOrder(orderId,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof deleteOrder>, TError, {orderId: number}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * This can only be done by the logged in user.
 * @summary Create user
 */
export const createUser = (
    user: User, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.post(
      `/user`,
      user,options
    );
  }



    export const useCreateUser = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof createUser>, TError,{data: User}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof createUser>, {data: User}> = (props) => {
          const {data} = props || {};

          return  createUser(data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof createUser>, TError, {data: User}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * @summary Creates list of users with given input array
 */
export const createUsersWithArrayInput = (
    userArrayBody: UserArrayBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.post(
      `/user/createWithArray`,
      userArrayBody,options
    );
  }



    export const useCreateUsersWithArrayInput = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof createUsersWithArrayInput>, TError,{data: UserArrayBody}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof createUsersWithArrayInput>, {data: UserArrayBody}> = (props) => {
          const {data} = props || {};

          return  createUsersWithArrayInput(data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof createUsersWithArrayInput>, TError, {data: UserArrayBody}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * @summary Creates list of users with given input array
 */
export const createUsersWithListInput = (
    userArrayBody: UserArrayBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.post(
      `/user/createWithList`,
      userArrayBody,options
    );
  }



    export const useCreateUsersWithListInput = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof createUsersWithListInput>, TError,{data: UserArrayBody}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof createUsersWithListInput>, {data: UserArrayBody}> = (props) => {
          const {data} = props || {};

          return  createUsersWithListInput(data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof createUsersWithListInput>, TError, {data: UserArrayBody}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * @summary Logs user into the system
 */
export const loginUser = (
    params?: LoginUserParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<string>> => {
    return axios.get(
      `/user/login`,{
        params,
    ...options}
    );
  }


export const getLoginUserQueryKey = (params?: LoginUserParams,) => [`/user/login`, ...(params ? [params]: [])];

    
export const useLoginUser = <TData = AsyncReturnType<typeof loginUser>, TError = AxiosError<void>>(
 params?: LoginUserParams, options?: { query?:UseQueryOptions<AsyncReturnType<typeof loginUser>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getLoginUserQueryKey(params);

  

  const queryFn: QueryFunction<AsyncReturnType<typeof loginUser>> = () => loginUser(params, axiosOptions);

  const query = useQuery<AsyncReturnType<typeof loginUser>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}


/**
 * @summary Logs out current logged in user session
 */
export const logoutUser = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.get(
      `/user/logout`,options
    );
  }


export const getLogoutUserQueryKey = () => [`/user/logout`];

    
export const useLogoutUser = <TData = AsyncReturnType<typeof logoutUser>, TError = AxiosError<void>>(
  options?: { query?:UseQueryOptions<AsyncReturnType<typeof logoutUser>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getLogoutUserQueryKey();

  

  const queryFn: QueryFunction<AsyncReturnType<typeof logoutUser>> = () => logoutUser(axiosOptions);

  const query = useQuery<AsyncReturnType<typeof logoutUser>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}


/**
 * @summary Get user by user name
 */
export const getUserByName = (
    username: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<User>> => {
    return axios.get(
      `/user/${username}`,options
    );
  }


export const getGetUserByNameQueryKey = (username: string,) => [`/user/${username}`];

    
export const useGetUserByName = <TData = AsyncReturnType<typeof getUserByName>, TError = AxiosError<void>>(
 username: string, options?: { query?:UseQueryOptions<AsyncReturnType<typeof getUserByName>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetUserByNameQueryKey(username);

  

  const queryFn: QueryFunction<AsyncReturnType<typeof getUserByName>> = () => getUserByName(username, axiosOptions);

  const query = useQuery<AsyncReturnType<typeof getUserByName>, TError, TData>(queryKey, queryFn, {enabled: !!(username), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}


/**
 * This can only be done by the logged in user.
 * @summary Updated user
 */
export const updateUser = (
    username: string,
    user: User, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.put(
      `/user/${username}`,
      user,options
    );
  }



    export const useUpdateUser = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof updateUser>, TError,{username: string;data: User}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof updateUser>, {username: string;data: User}> = (props) => {
          const {username,data} = props || {};

          return  updateUser(username,data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof updateUser>, TError, {username: string;data: User}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * This can only be done by the logged in user.
 * @summary Delete user
 */
export const deleteUser = (
    username: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.delete(
      `/user/${username}`,options
    );
  }



    export const useDeleteUser = <TError = AxiosError<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof deleteUser>, TError,{username: string}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof deleteUser>, {username: string}> = (props) => {
          const {username} = props || {};

          return  deleteUser(username,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof deleteUser>, TError, {username: string}, TContext>(mutationFn, mutationOptions)
    }
    


export const getFindPetsByStatusMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({id: faker.helpers.randomize([faker.datatype.number(), undefined]), category: faker.helpers.randomize([{id: faker.helpers.randomize([faker.datatype.number(), undefined]), name: faker.helpers.randomize([faker.random.word(), undefined])}, undefined]), name: faker.random.word(), photoUrls: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), tags: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({id: faker.helpers.randomize([faker.datatype.number(), undefined]), name: faker.helpers.randomize([faker.random.word(), undefined])})), undefined]), status: faker.helpers.randomize([faker.helpers.randomize(['available','pending','sold']), undefined])})))

export const getFindPetsByTagsMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({id: faker.helpers.randomize([faker.datatype.number(), undefined]), category: faker.helpers.randomize([{id: faker.helpers.randomize([faker.datatype.number(), undefined]), name: faker.helpers.randomize([faker.random.word(), undefined])}, undefined]), name: faker.random.word(), photoUrls: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), tags: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({id: faker.helpers.randomize([faker.datatype.number(), undefined]), name: faker.helpers.randomize([faker.random.word(), undefined])})), undefined]), status: faker.helpers.randomize([faker.helpers.randomize(['available','pending','sold']), undefined])})))

export const getGetPetByIdMock = () => ({id: faker.helpers.randomize([faker.datatype.number(), undefined]), category: faker.helpers.randomize([{id: faker.helpers.randomize([faker.datatype.number(), undefined]), name: faker.helpers.randomize([faker.random.word(), undefined])}, undefined]), name: faker.random.word(), photoUrls: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), tags: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({id: faker.helpers.randomize([faker.datatype.number(), undefined]), name: faker.helpers.randomize([faker.random.word(), undefined])})), undefined]), status: faker.helpers.randomize([faker.helpers.randomize(['available','pending','sold']), undefined])})

export const getUploadFileMock = () => ({code: faker.helpers.randomize([faker.datatype.number(), undefined]), type: faker.helpers.randomize([faker.random.word(), undefined]), message: faker.helpers.randomize([faker.random.word(), undefined])})

export const getGetInventoryMock = () => ({
        'cly5t8z9m0000uwcj728f6m85': faker.datatype.number()
      })

export const getPlaceOrderMock = () => ({id: faker.helpers.randomize([faker.datatype.number(), undefined]), petId: faker.helpers.randomize([faker.datatype.number(), undefined]), quantity: faker.helpers.randomize([faker.datatype.number(), undefined]), shipDate: faker.helpers.randomize([faker.random.word(), undefined]), status: faker.helpers.randomize([faker.helpers.randomize(['placed','approved','delivered']), undefined]), complete: faker.helpers.randomize([faker.datatype.boolean(), undefined])})

export const getGetOrderByIdMock = () => ({id: faker.helpers.randomize([faker.datatype.number(), undefined]), petId: faker.helpers.randomize([faker.datatype.number(), undefined]), quantity: faker.helpers.randomize([faker.datatype.number(), undefined]), shipDate: faker.helpers.randomize([faker.random.word(), undefined]), status: faker.helpers.randomize([faker.helpers.randomize(['placed','approved','delivered']), undefined]), complete: faker.helpers.randomize([faker.datatype.boolean(), undefined])})

export const getLoginUserMock = () => (faker.random.word())

export const getGetUserByNameMock = () => ({id: faker.helpers.randomize([faker.datatype.number(), undefined]), username: faker.helpers.randomize([faker.random.word(), undefined]), firstName: faker.helpers.randomize([faker.random.word(), undefined]), lastName: faker.helpers.randomize([faker.random.word(), undefined]), email: faker.helpers.randomize([faker.random.word(), undefined]), password: faker.helpers.randomize([faker.random.word(), undefined]), phone: faker.helpers.randomize([faker.random.word(), undefined]), userStatus: faker.helpers.randomize([faker.datatype.number(), undefined])})

export const getSwaggerPetstoreMSW = () => [
rest.post('*/pet', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.put('*/pet', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/pet/findByStatus', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getFindPetsByStatusMock()),
        )
      }),rest.get('*/pet/findByTags', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getFindPetsByTagsMock()),
        )
      }),rest.get('*/pet/:petId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetPetByIdMock()),
        )
      }),rest.post('*/pet/:petId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.delete('*/pet/:petId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/pet/:petId/uploadImage', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUploadFileMock()),
        )
      }),rest.get('*/store/inventory', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetInventoryMock()),
        )
      }),rest.post('*/store/order', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPlaceOrderMock()),
        )
      }),rest.get('*/store/order/:orderId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetOrderByIdMock()),
        )
      }),rest.delete('*/store/order/:orderId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/user', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/user/createWithArray', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/user/createWithList', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/user/login', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getLoginUserMock()),
        )
      }),rest.get('*/user/logout', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/user/:username', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetUserByNameMock()),
        )
      }),rest.put('*/user/:username', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.delete('*/user/:username', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),]
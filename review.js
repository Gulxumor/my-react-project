/* // TODO  ============= useQuery 
    React-query=> bu huddi useEffectga o'xshaydi. 
    Backenddan ma'lumot olib kelish uchun ishlatiladi. 
    UseEffectdan ustun joyi shundaki, useQuery malumotlarni o'z xotirasiga keshlab oladi.
    Keyin bu ma'lumotni biz boshqa 1 componentda ishlatishimzga access beradi.
    useEffectda esa boshqatdan fetch/axios orqali olib kelish kerak bo'ladi.

  ? 1. npm i react-query o'rnatib olinadi
    2. index.js ga o'tiladi so'ng quyidagi amallar bajariladi
  ? 3. import {QueryClient, QueryClientProvider} from "react-query"
    4. Yangi o'zgaruvchi ochilib new QueryClient ga tenglanadi
  ?  const queryClient = new QueryClient()  
    5. QueryClientProvider orqali root o'rab qo'yiladi
  ? <QueryClientProvider><Root /></QueryClientProvider>
    6. QueryClientProvider ning client degan atributiga yangi ochgan variableni beramiz
  ? <QueryClientProvider client={queryClient} ><Root/></QueryClientProvider> 
    7.Biror 1 componentga o'tiladi va useQuery import qilinib 1 o'zgaruvchiga tenglanadi
  ? const posts = useQuery()  
    useQuery o'ziga 3 ta parametr oladi. 
    1 => nomi.(nima malumot olib kelayotganga qarab descriptive nom qo'yib ketgan yaxshi) 
    2 => callback function bo'ladi. Shu joyda biz so'rov yuborishimiz mumkin
    3 => o'zining methodlari bo'ladi object ichida.
  ? const posts = useQuery("getAllPosts",   //! 1=> parametr
  ? () => fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
  ? { keepPreviousData: true, refetchOnWindowFocus: false, })  //! 3=> parametr
  shu orqali endi malumotlarni map qilib ekranga chiqarish mumkin bo'ladi 
  ==================================================
  ! BOSHQA COMPONENTDA ISHLATISH
  1. ishlatilinishi kk bo'lgan componentda useQueryClient degan hook import qilinadi.
  2. o'zgaruvchi ochilib useQueryClient() ga tenglanadi
  ? const queryClient = useQueryClient()
  3. So'ng yana 1 yangi variable ochiladi.
    So'ng unga queryClient.getQueryData("getAllPosts") deb yoziladi.
  4. Shu xolatda console qilib qaralsa, malumot kelgan bo'ladi. 
  Va endi anashu ma'lumotni istagan joyimizda ishlatib ketsak bo'laveradi.

  ! THE END
*/

/* // TODO  ============= Redux toolkit
    1. redux va redux-toolkit o'rnatib olinadi
    ?  npm install @reduxjs/toolkit react-redux
    2. Store ochib olamiz va uni configure qilib ketamiz. : configureCtore()
    ?  import { configureStore } from "@reduxjs/toolkit"; 
    3. Istalgan (store) nomda ozgaruvchi ochib uni export qilamiz va configureStore() ga tenglaymiz.
    4. Qavs ichiga obj ochilib reducer deb yoziladi va unga value qilib obj tenglanadi.
    5. Keyinchalik qandaydur slice create qiladigan bolsak, hammasi shu obj scope ichiga  yozib ketiladi
    6. Eng 1-orab turuvchiga yani index.js ga o'tilib, provider react-redux dan import qilinadi va root orab qoyiladi
    7. providerning store atribut ichiga create qilgan store imizni yozib qoyamiz lik this => 
    ?  <Provider store={store}></Root></Provider>
    8. Yangi 1 folder/fayl ochib ichiga slice yozamiz. 1-navbatda createSlice ni import qilamiz.
    ?  import { createSlice } from "@reduxjs/toolkit";
    9. createSlice ozgaruvchiga tenglanadi va qavs ichiga obj ochiladi. u oziga 3 ta qiymat oladi.  
      M: ^^^^^^^^^^^^^^^^^^^^
      const counterSlice = createSlice({
          name: "counterSlice",         // ! 1 => slice nomi. 
          initialState: { counter: 0 }, // ! 2=> initialState.
          reducers: {                   // ! 3=> reducers:{}  => bu oz ichiga barcha action (formula) larni oladi.
              increment: (state, action) => {
                  state.counter += 1
              },
              incrementByAmount: (state, action) => {
                  state.counter += action.payload
              }
          }
      });
      export const {increment,incrementByAmount} = counterSlice.actions
      export default counterSlice.reducer   // ! reducers emas
      M: ^^^^^^^^^^^^^^^^^^^^
    10. store.js ga otib  yozilgan slice ni import qilamiz va reducer ichidagi obj ga yozib qoyiladi
    ?  export const store = configureStore({reducer: {counterReducer,}})
    11. Component ochib root ga ulandi va counter qiladigan kod yozildi
       
        import { useDispatch, useSelector } from "react-redux"; // ! useDispatch, useSelector import qilindi 
        import {decrement, decrementByAmount,increment,incrementByAmount} from "../../store/CounterSlice";
        ! button onClick bolgandagi bajariladigan actionlar import qilindi
        const Navbar = () => {
          const { counter } = useSelector((state) => state.counterReducer);   
        ! useSelector orqali ishlatiladigan narsamiz destructatsiya qilib olinyabdi
          const dispatch = useDispatch();  // ! useDispatch dan dispatch import qilinyabdi
          return (
            <div>
              <h2>Navbar, {counter}</h2>   // ! counter ekranga chiqarilyabdi
              <button onClick={() => dispatch(increment())}>+</button>   
        ! onclick bolgandagi xolati => dispatch chaqirilyabdi va qavs ichiga bajariladigan action yozilyabdi
              <button onClick={() => dispatch(decrement())}>-</button>
              <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
              <button onClick={() => dispatch(decrementByAmount({ minus: 2 }))}>-2</button>
        ! dispatch chaqirilyabdi va qavs ichiga bajariladigan action yozilyabdi.
        ! 2 ga kamaytirib ketishi uchun obj ochilib uni ichiga { minus: 2 } deb payload berib ketilyabdi. 
        ! Funksiyasi bajarilayotganda anashu payloadga qarab kamaytirib ketadi           
            </div>
          );
        };
        export default Navbar;

    
        
    




 */

/* // TODO  ============= Something 

*/


import {toRefs, reactive, watch} from 'vue';
export default function(url){
    // const state = reactive({
    //     response:[],
    //     error:null,
    //     fetching:true, 
    // })
    const state ={
        response:[],
        error:null,
        fetching:true, 
    }

    const fetchData = async () =>{
        try{
            const res = await fetch(url);
            const json = await res.json();
            state.response = json;
        } catch(err){
            state.error = err;
        } finally {
            state.fetching = false;
        }
    };

    return {state, fetchData}
}
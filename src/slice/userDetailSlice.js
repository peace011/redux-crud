import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//create action
export const createUser=createAsyncThunk('createUser',async(data,rejectWithValue)=>{
    try{   
         const response=await axios.post("https://64abbd479edb4181202e6db9.mockapi.io/crud-youtube",data);
         return response.data;
         console.log(response.data);
    }
    catch(error){
        return rejectWithValue(error.response);
    }
})
//read action
export const showUser=createAsyncThunk('showuser', async(data,rejectWithValue)=>{
    try{
        const response=await axios.get('https://64abbd479edb4181202e6db9.mockapi.io/crud-youtube');
        return response.data;
    }
    catch(error){
        return rejectWithValue(error.response);
    }
})
//delete action
export const deleteUser=createAsyncThunk('deleteUser', async(id,rejectWithValue)=>{
    try{
        const response=await axios.delete(`https://64abbd479edb4181202e6db9.mockapi.io/crud-youtube/${id}`);
        return response.data;
    }
    catch(error){
        return rejectWithValue(error.response);
    }
})
//update action
export const updateUser=createAsyncThunk('updateUser', async(data,rejectWithValue)=>{
    try{
        console.log('updated data',data);
        const response=await axios.put(`https://64abbd479edb4181202e6db9.mockapi.io/crud-youtube/${data.id}`,data);
        return response.data;
        // console.log(response.data);
    }
    catch(error){
        return rejectWithValue(error.response);
    }
})

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users=action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const {id}=action.payload;
                if(id){
                    state.users=state.users.filter(item=>item.id !==id)
                }
                console.log("delete action",action.payload);
                })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                    state.users=state.users.map(item=>(item.id === action.payload.id?action.payload:item ));
               
                })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userDetail.reducer;

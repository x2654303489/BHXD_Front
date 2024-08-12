import {defineStore} from "pinia"
import token,{config} from "../apis/token"
import {Response} from "./response"
import "../api"
import type { AxiosResponse } from 'axios';
import {Categories} from "../models/categories"
import { CategoriesApi } from "../api";
import { tr } from "element-plus/es/locale";
import {showToast} from "../apis/toast"
export const fen21store = defineStore('category', {  
    state :(): {  
        categories:Categories[]
        categoriesMap:Map <string,Categories>
        categoriesfrom:Categories
        search:string
        selectdialogFormVisible:boolean
        currentPage:number
        pagercount:number

    }=>({
        categories:[],
        categoriesMap:new Map,
        categoriesfrom:{
            isStatus:false,
        },
        search:'',
        selectdialogFormVisible:false,
        currentPage:1,
        pagercount:0,
     
    }),  
    actions: {  
        async selectCategories(id : string){
            try{
                 const categoriesApi  = new CategoriesApi(config,"",token);
                const response :AxiosResponse<Response> = await categoriesApi.categoriesSelectdivideGet(id,10+"");
                let temp = response.data.data.records
                console.log(response)
                this.pagercount = response.data.data.pages
                
                this.categories =  temp
                this.categoriesMap = new Map(temp.map(item => [item.id, item]));
            } catch (error) {
                showToast(error,"Error")
            }
           
        },
        async confirm(){
            const categoriesApi  = new CategoriesApi(config,"",token);
           
            try{ 
                if(this.categoriesfrom.id != 0){
                    const response :AxiosResponse<Response> = await categoriesApi.categoriesUpdatePut(config.sessionStorage+"",this.categoriesfrom);
                    this.selectdialogFormVisible = false
                     showToast("修改成功","Default")
                    this.selectCategories(this.currentPage)
                }else{
                    const response :AxiosResponse<Response> = await categoriesApi.categoriesInsertPost(config.sessionStorage+"",this.categoriesfrom);
                    this.selectdialogFormVisible = false
                    showToast("添加成功","Success")
                    
                    this.selectCategories(this.currentPage)
                }
            } catch (error) {
                showToast(error,"Error")
            }
        },
        currentchange(val:number){
            this.currentPage = val
            this.selectCategories(this.currentPage)
        },
        //添加
        inset(){
            
            this.selectdialogFormVisible = true
            this.categoriesfrom = {
                isStatus:false,
                id:0
            }
        },
        //改变权限
        async updatestate(id:number,isStatus:boolean){
            try{ 
                let status:boolean = !isStatus
                const categoriesApi  = new CategoriesApi(config,"",token);
                const response :AxiosResponse<Response> = await categoriesApi.categoriesUpdatestatusPut(id,status);
                this.selectCategories(this.currentPage)
                showToast("修改成功","Default")
            } catch (error) {
                showToast(error,"Error")
            }
        },
        //编辑
        edit(id){
            this.categoriesfrom = this.categoriesMap.get(id)
            this.selectdialogFormVisible = true
        },
        //删除
        async delete(id:number){
            try{ 
                const categoriesApi  = new CategoriesApi(config,"",token);
                const response :AxiosResponse<Response> = await categoriesApi.categoriesDeleteDelete(id);
                showToast("删除成功","Default")
                this.selectCategories(this.currentPage)
            } catch (error) {
                showToast(error,"Error")
            }
        }
    },
  
  });
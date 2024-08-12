import {defineStore} from "pinia"
import token,{config} from "../apis/token"
import {Response} from "./response"
import "../api"
import type { AxiosResponse } from 'axios';
import { SysMenu } from "../models/sys-menu";
import { CopyMenuApi } from "../api";
import {showToast} from "../apis/toast"
export const fen31store = defineStore('sysMenu', {  
    state :(): {  
      sysMenu:SysMenu[]
      sysMenuMap:Map<string,SysMenu>
      sysMenufrom:SysMenu
      currentPage:number
      pagercount:number
    }=>({
      sysMenu:[],
      sysMenuMap:new Map<string,SysMenu>(),
      sysMenufrom:{},
      currentPage:1,
      pagercount:0
    }),  
    actions: {  
      async selectdivide(id : number){
        const copyMenuApi = new CopyMenuApi(config,"",token);
        const response : AxiosResponse<Response> = await  copyMenuApi.sysMenuSelectdivideGet(id)
        let item = response.data.data.records
        this.sysMenu = item
        this.sysMenuMap = new Map(item.map(item => [item.id, item]));
     },
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
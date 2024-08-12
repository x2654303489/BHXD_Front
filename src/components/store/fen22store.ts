import {defineStore} from "pinia"
import {Products} from "../models/products"
import token,{config} from "../apis/token"
import {Response} from "./response"
import "../api"
import { CategoriesApi, CopyUsersControllerApi, ProductsApi } from "../api";
import type { AxiosResponse, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import {showToast} from "../apis/toast"


export const fen22store = defineStore('products', {  
    state :(): {  
        products:Products,
        response:Response,
        dialogFormVisible:boolean,
        search:String,
        tableData: Products[],
        locationOptionsmap:Map<string,string>,
        locationOptions: string[] ,
        locationOptionsstatus: Map<string,string>,
        catname:[],
        username:[],
        paginationsize : number,
        paginationcurrent: number,
        paginationcurrentPage: number,
        paginationpagercount: number,
        itemMap : Map<number,Products>;
        image:any
        file:File
        img:[]
    }=>({
      products : {  
          categoryId: null,
          createTime: null,
          description: null,
          id: 0,
          imageurl: null,
          isDelete:null,
          price: null,
          productName:null,
          status: null ,
          stockQuantity :null,
          updateTime: null,
          usersId: null ,
          
          },  
          img:[],
          response : {
            
          },
          dialogFormVisible : false,
          search: '',
          file: new File([],""),  
        tableData : [] as any[],
        locationOptionsmap:new Map<string,string>([["下架","NotShelves"],["审核中","Audit"],["上架","Shelves"]]),
        locationOptions : ["下架","审核中","上架"],
        locationOptionsstatus : new Map<string,string>([["NotShelves","下架"],["Audit","审核中"],["Shelves","上架"]]),
        catname :[],
        username:[],
        paginationsize : 10,
        paginationcurrent : 1,
        paginationcurrentPage: 1,
        paginationpagercount: 100,
        itemMap : new Map<number,Products>(),
        image: ''
    }),  
    actions: {  
      //分页显示
      async selectProduct(id: number) {  
          try {  
            const productsApi = new ProductsApi(config,"",token);
            const response : AxiosResponse<Response> = await  productsApi.productsSelectdivideGet(id)
            
            let temp = response.data.data.records
            // this.tableData.splice(0, this.tableData.length, ...response.data.data.records);
            
            
           
            this.tableData = temp
            for (const item of this.tableData) {  
              if (item.imageurl != null) {  
                  const a = await this.getImageUrl(item.imageurl);  
                  item.imageurlcopy = a;  
              }  
          }  
            this.itemMap = new Map(this.tableData.map(item => [item.id, item]));
            this.itemMap.forEach(item => {  
              item.status = this.locationOptionsstatus.get(item.status);
              
            });
           
            // this.paginationcurrentPage = response.data.data.current
            this.paginationpagercount = response.data.data.pages
            this.paginationcurrent = response.data.data.current
          } catch (error) {  
            showToast(error,"Error")  
          }  
      }, 
      //分页栏更改
      handleCurrentChange(val) {
    
        this.paginationcurrentPage = val
        this.selectProduct(this.paginationcurrentPage)
      },
        // 计算属性，用于获取当前页应该显示的数据  
      // paginatedData(val) {  
      //   const start = (this.currentPage - 1) * this.pageSize;  
      //   const end = start + this.pageSize;  
      //   return this.allData.slice(start, end);  
      // },
      //添加事件
      sevainproducts() {
        this.dialogFormVisible = true
        this.products = {}
        this.products.id = 0
        this.image = ''
        this.products.imageurl = ''
        this.file = new File([], "")
      },
      //添加or编辑
      async seva() {
        try {  
          const productsApi = new ProductsApi (config,"",token);
          let products:Products  = this.products        
         
          products.status = this.locationOptionsmap.get(products.status)
          if (this.products.id != 0){
            if(this.image != this.products.imageurlcopy && this.image != ''){
              const response : AxiosResponse<Response> = await  productsApi.productsUploadPost(this.file)
              products.imageurl = response.data.data
              
            }

              const response : AxiosResponse<Response> = await  productsApi.productsUpdatePut(config.sessionStorage+"",products)
              if (response.data.data = 'OK'){
                showToast("修改成功","Default")
                this.selectProduct(this.paginationcurrentPage)
              }
            
           
          }else{
            
            const response : AxiosResponse<Response> = await  productsApi.productsUploadPost(this.file)
            products.imageurl = response.data.data
            if (response.data.data != 'NO'){
              
              const response : AxiosResponse<Response> = await  productsApi.productsInsertPost(config.sessionStorage+"",products)
              if (response.data.data != 'NO')showToast("添加成功","Success")
              
            this.selectProduct(this.paginationcurrentPage)
            }
          }
          this.dialogFormVisible = false
        } catch (error) {
          showToast(error,"Error") 
        }
      },
      //编辑
      async edit(id: number){
        this.dialogFormVisible = true
        // this.products = this.tableData[id]
        this.products = this.itemMap.get(id)
        this.image = this.products.imageurlcopy
      } ,
      //更改权限
      async enable(id: number, status :string) {
        const productsApi = new ProductsApi(config,"",token);
        const response : AxiosResponse<Response> = await  productsApi.productsUpdatestatusPut(id,status)
        this.selectProduct(this.paginationcurrentPage)
      },
      //删除
      async delete(id: number) {
        try {  
          const productsApi = new ProductsApi(config,"",token);
          const response : AxiosResponse<Response> = await  productsApi.productsDeleteDelete(id)
          if (response.data.data = 'OK'){
            this.selectProduct(this.paginationcurrentPage)
            showToast("删除成功","Default")
          }
        } catch (error) {
          showToast(error,"Error") 
        }
      },
      //商家获取
      async selectSeller() {
        try{
          
          const copyUsersControllerApi = new CopyUsersControllerApi(config,"",token);
            const response : AxiosResponse<Response> = await  copyUsersControllerApi.usersSelectidGet(1,true)
            // console.log(response)
            this.username  = response.data.data
            this.username = this.username.map(user => ({
              value: user.id,
              label: user.username,
            }))

          } catch (error) {
            showToast(error,"Error") 
          }
      },
      //分类获取
      async selectCategory() {
        try{
            const categoriesApi = new CategoriesApi(config,"",token);
            const response : AxiosResponse<Response> = await  categoriesApi.categoriesSelectidGet(0,true)
            // console.log(response)
            
            this.catname  = response.data.data
            this.catname = this.catname.map(cat => ({
              value: cat.id,
              label: cat.categoryName,
            }))
        } catch (error) {
          showToast(error,"Error") 
        }
      },
      customUpload(options: any){
        this.image =  URL.createObjectURL(options.file)
        this.file = options.file
      },
      handleAvatarSuccess(){

      },
      beforeAvatarUpload(file: any){  
        // 文件上传前的校验逻辑  
          if (file.type !== 'image/jpeg') {  
            showToast('Avatar picture must be JPG format!',"Error")  
            return false;  
          } else if (file.size / 1024 / 1024 > 4) {  
            showToast("大小超过4M","Error") 
            return false;  
          }  
          return true;  
      },
      async   getImageUrl(imageId) { 
        if(imageId!=undefined){
          try {  
            // 假设你的后端接口接受 imageId 并返回图片的 URL  
            const response = await token.get(imageId,{responseType: 'blob'}); 
            let url = URL.createObjectURL(new Blob([response.data]))
            
            return  url+"";  
          } catch (error) {  
            console.error('Failed to fetch image URL:', error);  
            return null; // 或者返回一个默认图片 URL  
          }  
        }

         
       
      },   
    },
  
  });
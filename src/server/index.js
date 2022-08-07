let express =require('express')
let app=express();
let bodyParser = require('body-parser')
let mysql=require("mysql")
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//解决跨域
let cors=require('cors')
app.use(cors())
// let server = require('http').createServer(app);
let options ={
    host:'localhost',
    port:'3306',//可选，默认就是3306
    user:'root',
    password:'19991008',
    database:'xm'
}
//创建连接
let con =mysql.createConnection(options);
//建立连接
con.connect((err)=>{
    //如果连接失败
    if(err){
        console.log(err,"连接失败")
    } else{
        console.log("数据库连接成功")
    }
})

//验证账号密码
app.post('/login',(req,res)=>{
    con.query('select * from user',(error, results) =>{
        if (error) throw error;
        let flag=false
        results.map((i)=>{
            if(i.username===`${req.body.username}`&& i.password===`${req.body.password}`){
                flag=true;
            }
        })
        if(flag){
            res.send({code:"200"})
        }else{
            res.send({code:"400"})
        }

    });

})
//注册
app.post('/register',(req,res)=>{
    con.query(`insert into user (username,password) values ('${req.body.username}','${req.body.password}')`,(error, results) =>{
        if (error) throw error;
        let obj= {
            code:'200',
        }
        res.send(obj);
    });

})

//获取
app.post('/getList',(req,res)=>{
    con.query('select * from things',(error, results) =>{
        if (error) throw error;
        res.send(results);
    });
})
//新增
app.post('/addThings',(req,res)=>{
    con.query(`insert into things (name,price,num,address) values ('${req.body.name}',
    '${req.body.price}','${req.body.num}','${req.body.address}')`,(error, results) =>{
        if (error) throw error;
        res.send(results);
    });
})
// 编辑
app.post('/editThings',(req,res)=>{
    con.query(`update things set name='${req.body.name}',price='${req.body.price}',num='${req.body.num}',
    address='${req.body.address}' where id='${req.body.id}'`,(error,results)=>{
        if (error) throw error;
        res.send(results);
    })
})
//删除
app.post("/delThings",(req,res)=>{
    con.query(`delete from things where id=${req.body.id}`,(error,results)=>{
        if (error) throw error;
        res.send({code:"200"});
    })
})
app.listen(4000,()=>{
    console.log("server is running!")
})

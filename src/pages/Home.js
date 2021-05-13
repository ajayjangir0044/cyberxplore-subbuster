import React,{useState} from 'react';
import Jumbotron from '../components/Jumbotron'
import {Input,Button,Row,Col,Tag } from 'antd'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
const _=require('lodash')
const {Search}=Input
const Home=({history})=>{

    let dispatch=useDispatch();
    const {subdomain}=useSelector((state)=>({...state}))

    const color=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue"]
    const[showTags,setShowTags]=useState(false);
    const onSearch = value =>{
        let cart=[]
        if(typeof window !== 'undefined'){

            if(localStorage.getItem("subdomain")){
                //if items are already in local storage
                cart=JSON.parse(localStorage.getItem("subdomain"))
            }

            cart.push(value)
            //remove duplicates with lodash
            let unique =_.uniqWith(cart,_.isEqual)

            localStorage.setItem("subdomain",JSON.stringify(unique))

            dispatch({
                type:'NEW_SUBDOMAIN_SEARCH',
                payload:unique
            })    
        }
        
        history.push(`/find?domain=${value}`)
    } ;
    
    return <>
        <div className="jumbotron text-danger h1 font-weight-bold text-center">
            <h4>A Fast Subdomain Enumeration Tool With IP Resolving & HTTP Status Code Presented By</h4>
            <Jumbotron text={["Cyberxplore"]}/>
        </div>

        <div className="container-fluid" >
            <div className="row justify-content-center">
                <div className="col-md-6 pt-3 mt-4">
                    <Search size="large" placeholder="Enter domain name" onSearch={onSearch} enterButton />
                </div>
            </div>
            <Row justify="center" >
                <Col span={24} className="mt-3 text-center">
                    <Button size="large" onClick={()=>setShowTags(!showTags)}>
                        {showTags?"Hide last searched results":"Show last searched results"}
                    </Button>
                </Col>
                {showTags && <Col span={12} className="text-center">
                    {subdomain && subdomain.map((s,i)=>(
                    <Link to={`/find?domain=${s}`}>
                        <Tag color={color[Math.floor((Math.random() * 9))]} className="mt-3">{s}</Tag>
                    </Link>
                    ))}
                </Col> }
            </Row>
            
                
        </div>
    </>
}

export default Home
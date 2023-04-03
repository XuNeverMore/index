var engines = {
    setBingEngine:function (){
        // let form_search = document.querySelector("#form-search");
        // let input_search = document.querySelector("#edt-search");
        // form_search.action = 'https://cn.bing.com/search';
        // input_search.name = 'q';
        this.setEngineData('https://cn.bing.com/search','q','icons/ic_bing.png')
    },
    setBaiduEngine:function(){
        // let form_search = document.querySelector("#form-search");
        // let input_search = document.querySelector("#edt-search");
        // form_search.action = 'https://www.baidu.com/s';
        // input_search.name = 'word';
        this.setEngineData('https://www.baidu.com/s','word','ico/ico_baidu.ico')
    },
    setEngineData:function(acion,name,icon){
        let form_search = document.querySelector("#form-search");
        let input_search = document.querySelector("#edt-search");
        let icon_engine = document.querySelector(".icon-engine");
        let select_engine = document.querySelector("#select-engine");
        icon_engine.src=icon
        form_search.action = acion;
        input_search.name = name;
    },
    setEngine:function(engineName){
        if(engineName==='baidu'){
            this.setBaiduEngine();
        }else if(engineName==='bing'){
            this.setBingEngine();
        }
    }
}
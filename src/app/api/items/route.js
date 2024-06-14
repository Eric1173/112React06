export async function GET() {
    // 1. get access token
    const token = await getToken();
    // 2. get data from TDX
    if(token){
        const apiData = await fetchData(token);
        // 3. return response
        return Response.json(apiData);
    }else{
        return Response.json(
            {error: 'Failed token'},
            {status: 401}
        );
    }
}

async function getToken(){
    const authURL = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials')
    params.append('client_id', process.env.TDX_CLIENT_ID);
    params.append('client_secret', process.env.TDX_CLIENT_SECRET);
    console.log(process.env.TDX_CLIENT_ID);

    try{
        const response = await fetch (authURL,{
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: params,
        });
        if(response.ok){
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data.access_token;
        }else{
            console.error("Error fetching token: ", response.status);
        }
    }catch(error){
        console.log('Error fetching token: ', error);
    }
}

async function fetchData(token){
    const apiURL = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty';

    try{
        const response = await fetch(apiURL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        });

        if(response.ok){
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data;
        }else{
            console.error("Error fetching data: ", response.status);
        }
    }catch(error){
        console.log('Error fetching data: ', error);
    }
    return null;
}
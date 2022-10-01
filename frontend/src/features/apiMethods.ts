

export interface ActionTypes {
    type: string;
    payload: any;
}

export const httpGetRequest = async (apiURL: string) => {
    try {
        // 👇️ const response: Response
        const response = await fetch(apiURL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': 'GET'
          }
        });
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const result = (await response.json()) as any;
        return result;
      } catch (error) {
        if (error instanceof Error) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}

export const httpPostRequest = async (apiURL: string, requestBody: any) => {
    try {
        // 👇️ const response: Response
        const response = await fetch(apiURL, {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': 'POST'
          }
        });
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const result = (await response.json()) as any;
    
        console.log('result is: ', JSON.stringify(result, null, 4));
    
        return result;
      } catch (error) {
        if (error instanceof Error) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}
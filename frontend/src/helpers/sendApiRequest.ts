type method = 'GET' | 'POST'| 'PUT' | 'DELETE';

function returnCorrectRequest(method:method, data: unknown): RequestInit
{
    if (method === 'GET'){
        return {
            method: method,
            headers: { 'Content-Type': 'application/json'}
        };
    }

    return {
        method: method,
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    };
}

export async function sendApiRequest<T> (url:string, method: method, data: unknown = {}) : Promise<T>
{
    const response = await fetch(url, returnCorrectRequest(method,data));

    if (!response.ok){
        throw new Error(`an error has occured ${response.status}`);
    }

    return await response.json() as Promise<T>;
}
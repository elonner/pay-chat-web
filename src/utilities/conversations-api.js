import sendRequest from "./send-request";
const BASE_URL = '/api/conversations';

export async function newConvo(username) {
    return sendRequest(BASE_URL, 'POST', username);
}

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function newMessage(id, message) {
    return sendRequest(`${BASE_URL}/${id}/newMsg`, 'POST', message);
}
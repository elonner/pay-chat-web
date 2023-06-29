import sendRequest from "./send-request";
const BASE_URL = '/api/conversations';

export async function newConvo(username) {
    return sendRequest(BASE_URL, 'POST', username);
}

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function newMessage(message) {
    return sendRequest(`${BASE_URL}/${message.conversation._id}/newMsg`, 'POST', {message});
}

export async function getMessages(id) {
    return sendRequest(`${BASE_URL}/${id}/messages`);
}
const baseURL = 'http://localhost:9090/bugs/';

export const postBug = (payload, selectedReporter) => {
    payload.reporter = selectedReporter;
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteBug = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
}

export const patchBug = (payload) => {
    return fetch(baseURL + payload.id, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
}

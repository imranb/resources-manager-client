
// =========== PDF Calls ===========
// GET ALL PDFS
export const getPdfList = fetch('http://localhost:8000/api/pdfs', {
    method: 'get',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((res) => res.json())
    .then(data => {
        return data.data
    })
    .catch(err => console.log(err.message))

// DELETE PDF
export function deletePdf(id) {
    fetch(`http://localhost:8000/api/pdfs/${id}/delete`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then(data => {
            return data.message
         })
        .catch(err => console.log(err.message))
}

// GET SINGE PDF
export async function getPdf(id) {
    const res = await fetch(`http://localhost:8000/api/pdfs/${id}/show`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await res.json();
}

// =========== Snippet Calls ===========
// GET ALL SNIPPETS
export const getSnippetsList = fetch('http://localhost:8000/api/snippets', {
    method: 'get',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((res) => res.json())
    .then(data => {
        return data.data
    })
    .catch(err => console.log(err.message))

// DELETE SNIPPET
export function deleteSnippet(id) {
    fetch(`http://localhost:8000/api/snippets/${id}/delete`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then(data => {
            return data.message
            })
        .catch(err => console.log(err.message))
}

// GET SINGE SNIPPET
export async function getSnippet(id) {
    const res = await fetch(`http://localhost:8000/api/snippets/${id}/show`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await res.json();
}

// UPDATE SNIPPET
export async function updateSnippet(snippet, id) {
     const res = await fetch(`http://localhost:8000/api/snippets/${id}/update`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(snippet)

      })
      return await res.json()
    }

// =========== Link Calls ===========
// GET ALL LINKS
export const getLinkList = fetch('http://localhost:8000/api/links', {
    method: 'get',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((res) => res.json())
    .then(data => {
        return data.data
    })
    .catch(err => console.log(err.message))

// STORE LINK
export async function storeLink(link) {
    const res = await fetch(`http://localhost:8000/api/links/store`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify(link)
    })
    return await res.json();
}

// GET SINGE LINK
export function getLink(id) {
    fetch(`http://localhost:8000/api/links/${id}/show`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then(data => {
            return data
         })
        .catch(err => console.log(err.message))
}

// UPDATE LINK 
export async function updateLink(link, id) {
    const res = await fetch(`http://localhost:8000/api/links/${id}/update`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(link)
        })
        return await res.json()
}

// DELETE LINK
export async function deleteLink(id) {
    const res = await fetch(`http://localhost:8000/api/links/${id}/delete`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}
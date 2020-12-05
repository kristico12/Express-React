let validatorProduct = {
    Id: 'numeric|integer',
    Name: ['required','string','between:3,50','regex:/^[a-zA-Z ]*$/'],
    Description: 'required|string',
    Quantity: 'required|numeric|integer|min:0|max:10',
    Warranty: 'required|string',
    Price: 'required|numeric|min:0',
    Status: 'required|string|in:ACTIVE,PUBLISHED,INACTIVE',
    CreatedAt: 'required|date'
}
export {
    validatorProduct,
}
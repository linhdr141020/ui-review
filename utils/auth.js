export async function verifyShopifyHMAC(queryParams, secret) {
    const hmac = queryParams.get("hmac");
    if(!hmac) return false;
    queryParams.delete('hmac');
    queryParams.delete('signature');
    queryParams.sort();
    let sortedSearchParams = Array.from(queryParams.entries()).map(([key, value]) =>key+'='+value).join('&');
    const key = await crypto.subtle.importKey(
        "raw",
        Buffer.from(secret, 'utf8'),
        {name: "HMAC", hash: "SHA-256"},
        false,
        ["sign", "verify"]
    )
    const checked = await crypto.subtle.verify(
        "HMAC", 
        key, 
        Buffer.from(hmac, "hex"),
        Buffer.from(sortedSearchParams, "utf-8")
    )
    return checked;
}
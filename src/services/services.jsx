export const getCoords = async (url) => {
    const res = await fetch(url);

    if (res.status !== 200) throw new Error("Ошибка соединения с сервером");

    return await res.json();
}
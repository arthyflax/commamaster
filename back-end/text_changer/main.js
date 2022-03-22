const text = "Als die Ampelkoalition sich auf den Weg machte, im vorigen Herbst, konnten die Überschriften gar nicht groß genug sein.";

function formatText(text) {
    let totalLength = text.length;
    let txtarr = text.split(" ");
    let commarr = [];
    txtarr.forEach((word, i) => {
        if (word.includes(",")) {
            if (word.split(",")[1] != "") {
                let words = word.split(",");
                txtarr.splice(i, 1);
                words.forEach((word, index) => {
                    commarr.push(i + index);
                    txtarr.splice(i + index, 0, word);
                });
            } else {
                commarr.push(i);
                txtarr[i] = word.slice(0, -1);
            }
        }
    });
    return { text:txtarr, comma: commarr, comma_Amount: commarr.length, words: txtarr.length, total_Length:totalLength};
}
console.log(formatText(text));


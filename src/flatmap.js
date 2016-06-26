/**
 * Created by ge on 6/25/16.
 */
export default function flatMap (nestedList) {
    var result = [];
    nestedList.forEach((item)=>{
        if (Array.isArray(item)) result = result.concat(item);
        else result.push(item);
    });
    return result;
}

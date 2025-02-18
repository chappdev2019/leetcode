var mergeInBetween = function (list1, a, b, list2) {
    let end = list1;
    
    for (let i = 0; i < b; i++) {
        end = end.next;
    }
    let endNext = end.next; 

    let startPrev = list1;
    for (let i = 0; i < a - 1; i++) {
        startPrev = startPrev.next;
    }

    startPrev.next = list2;

    let cur = list2;
    while (cur.next) {
        cur = cur.next;
    }

    cur.next = endNext;

    return list1;
};

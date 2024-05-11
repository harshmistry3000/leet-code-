/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
    const n = quality.length;
    const workers = [];
    for (let i = 0; i < n; i++) {
        workers.push({ quality: quality[i], wage: wage[i] });
    }
    workers.sort((a, b) => a.wage / a.quality - b.wage / b.quality);
    
    let minCost = Infinity;
    let sumQuality = 0;
    const maxHeap = new MaxHeap();
    
    for (let i = 0; i < n; i++) {
        const { quality, wage } = workers[i];
        maxHeap.insert(quality);
        sumQuality += quality;
        
        if (maxHeap.size() > k) {
            sumQuality -= maxHeap.extractMax();
        }
        
        if (maxHeap.size() === k) {
            minCost = Math.min(minCost, sumQuality * (wage / quality));
        }
    }
    
    return minCost;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }
    
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return max;
    }
    
    sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            
            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}

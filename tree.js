// 实现二叉搜索树
var BinarySearchTree = function () {
    
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;
    // 插入操作的辅助函数
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };
    // 中序遍历的辅助函数
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };
    // 先序遍历的辅助函数
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };
    // 后序遍历的辅助函数
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        };
    };

    var minNode = function (node) {
        if (node) {
            while (node && node.left) {
                node = node.left;
            }
        }
        return node.key;
    };

    var findMinNode = function (node) {
        if (node) {
            while (node && node.left) {
                node = node.left;
            }
        }
        return node;
    };

    var maxNode = function (node) {
        if (node) {
            while (node && node.right) {
                node = node.right;
            }
        }
        return node.key;
    };

    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        } 
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }   
    };

    var removeNode = function (node, key) {
        // 这里的return节点是为了改变父节点的引用
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } 
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key); 
            return node;
        }
    };
    // 向树中插入新键
    this.insert = function (key) {

        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };
    // 中序遍历
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    };
    // 先序遍历
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    };
    // 后序遍历
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    };
    // 返回最小值
    this.min = function () {
        return minNode(root);
    };

    this.max = function () {
        return maxNode(root);
    };

    this.search = function (key) {
        return searchNode(root, key);
    };

    this.remove = function (key) {
        root = removeNode(root, key);
    };
};

var tree = new BinarySearchTree();
var arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];
arr.forEach(function (val) {
    tree.insert(val);
})

var printNode = function (value) {
    console.log(value);
};
tree.insert(16);
// tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
tree.remove(7);
tree.inOrderTraverse(printNode);

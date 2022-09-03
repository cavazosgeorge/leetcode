/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
    let output = [];
    const traverse = (node) => {
        if (!node) return 0;
        output.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    
    traverse(root);
    return output;
}

// iterative
// const preorderTraversal = (root) => {
//     let stack = [], output = [];
//     while (stack.length || node !== null) {
//         if (node !== null) {
//             output.push(node.val);
//             stack.push(node);
//             node = node.left;
//         } else {
//             node = stack.pop().right;
//         }
//     }
    
//     return output;
// }







// Automatically generated with Reach 0.1.2
/* eslint-disable no-unused-vars, no-empty-pattern, no-useless-escape, no-loop-func */
export const _version = '0.1.2';


export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  
  const v0 = await ctc.creationTime();
  
  const v3 = stdlib.protect(stdlib.T_UInt, await interact.getHand(), {
    at: './index.rsh:9:54:application',
    fs: ['at ./index.rsh:8:15:application call to [unknown function] (defined at: ./index.rsh:8:19:function exp)'],
    msg: 'getHand',
    who: 'Alice'
     });
  const txn1 = await (ctc.sendrecv('Alice', 1, 1, stdlib.checkedBigNumberify('./index.rsh:11:11:dot', stdlib.UInt_max, 0), [stdlib.T_UInt, stdlib.T_UInt], [v0, v3], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [stdlib.T_UInt], true, true, false, ((txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:11:11:dot', stdlib.UInt_max, 0), v0]);
    sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:11:11:dot', stdlib.UInt_max, 0)]);
    const [v5] = txn1.data;
    const v6 = txn1.value;
    const v10 = txn1.time;
    const v4 = txn1.from;
    
    const v7 = stdlib.eq(v6, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v7, {
      at: './index.rsh:11:11:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Alice'
       });
    stdlib.assert(true, {
      at: './index.rsh:11:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
       });
    
    
    sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:12:17:after expr stmt semicolon', stdlib.UInt_max, 1), v10]);
    sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:12:17:after expr stmt semicolon', stdlib.UInt_max, 1)]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v5] = txn1.data;
  const v6 = txn1.value;
  const v10 = txn1.time;
  const v4 = txn1.from;
  const v7 = stdlib.eq(v6, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v7, {
    at: './index.rsh:11:11:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Alice'
     });
  stdlib.assert(true, {
    at: './index.rsh:11:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
     });
  
  
  const txn2 = await (ctc.recv('Alice', 2, 1, [stdlib.T_UInt], false, false));
  const [v15] = txn2.data;
  const v16 = txn2.value;
  const v20 = txn2.time;
  const v14 = txn2.from;
  const v17 = stdlib.eq(v16, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v17, {
    at: './index.rsh:17:11:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Alice'
     });
  stdlib.assert(true, {
    at: './index.rsh:17:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
     });
  
  
  const v21 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:18:35:decimal', stdlib.UInt_max, 4), v15);
  const v22 = stdlib.add(v5, v21);
  const v23 = stdlib.mod(v22, stdlib.checkedBigNumberify('./index.rsh:18:49:decimal', stdlib.UInt_max, 3));
  
  
  
  
  stdlib.protect(stdlib.T_Null, await interact.seeOutcome(v23), {
    at: './index.rsh:22:32:application',
    fs: ['at ./index.rsh:21:13:application call to [unknown function] (defined at: ./index.rsh:21:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
     });
  return;
  
  
   }
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  
  const v0 = await ctc.creationTime();
  const txn1 = await (ctc.recv('Bob', 1, 1, [stdlib.T_UInt], false, false));
  const [v5] = txn1.data;
  const v6 = txn1.value;
  const v10 = txn1.time;
  const v4 = txn1.from;
  const v7 = stdlib.eq(v6, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v7, {
    at: './index.rsh:11:11:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Bob'
     });
  stdlib.assert(true, {
    at: './index.rsh:11:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
     });
  
  
  
  const v13 = stdlib.protect(stdlib.T_UInt, await interact.getHand(), {
    at: './index.rsh:15:54:application',
    fs: ['at ./index.rsh:14:15:application call to [unknown function] (defined at: ./index.rsh:14:19:function exp)'],
    msg: 'getHand',
    who: 'Bob'
     });
  const txn2 = await (ctc.sendrecv('Bob', 2, 1, stdlib.checkedBigNumberify('./index.rsh:17:11:dot', stdlib.UInt_max, 0), [stdlib.T_UInt, stdlib.T_UInt], [v10, v13], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [stdlib.T_UInt], true, true, false, ((txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:17:11:dot', stdlib.UInt_max, 1), v10]);
    sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:17:11:dot', stdlib.UInt_max, 1)]);
    const [v15] = txn2.data;
    const v16 = txn2.value;
    const v20 = txn2.time;
    const v14 = txn2.from;
    
    const v17 = stdlib.eq(v16, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v17, {
      at: './index.rsh:17:11:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Bob'
       });
    stdlib.assert(true, {
      at: './index.rsh:17:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
       });
    
    
    const v21 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:18:35:decimal', stdlib.UInt_max, 4), v15);
    const v22 = stdlib.add(v5, v21);
    const v23 = stdlib.mod(v22, stdlib.checkedBigNumberify('./index.rsh:18:49:decimal', stdlib.UInt_max, 3));
    
    
    
    sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([]), []);
    sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([]), []);
    sim_r.isHalt = true;
    
    return sim_r;
     })));
  const [v15] = txn2.data;
  const v16 = txn2.value;
  const v20 = txn2.time;
  const v14 = txn2.from;
  const v17 = stdlib.eq(v16, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v17, {
    at: './index.rsh:17:11:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Bob'
     });
  stdlib.assert(true, {
    at: './index.rsh:17:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
     });
  
  
  const v21 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:18:35:decimal', stdlib.UInt_max, 4), v15);
  const v22 = stdlib.add(v5, v21);
  const v23 = stdlib.mod(v22, stdlib.checkedBigNumberify('./index.rsh:18:49:decimal', stdlib.UInt_max, 3));
  
  
  
  
  stdlib.protect(stdlib.T_Null, await interact.seeOutcome(v23), {
    at: './index.rsh:22:32:application',
    fs: ['at ./index.rsh:21:13:application call to [unknown function] (defined at: ./index.rsh:21:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
     });
  return;
  
  
   }

const _ALGO = {
  appApproval: `#pragma version 2
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 4
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 2 Args 0
==
assert
byte base64(bA==)
app_global_get
gtxna 2 Args 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 2 Args 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 2 Args 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 2
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 4
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 2
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 2
// Check size
global GroupSize
int 4
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn CloseRemainderTo
global ZeroAddress
==
assert
txn GroupIndex
int 4
>=
assert
done:
int 1
return
`,
  stepargs: [0, 89, 89],
  steps: [null, `#pragma version 2
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
txn NumArgs
int 6
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:11:11:dot"
// "[]"
gtxn 3 Amount
arg 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:11:11:dot"
// "[]"
int 1
assert
// compute state in HM_Set
int 1
itob
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
arg 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 2
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
txn NumArgs
int 6
==
assert
// compute state in HM_Check 1
int 1
itob
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:17:11:dot"
// "[]"
gtxn 3 Amount
arg 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:17:11:dot"
// "[]"
int 1
assert
arg 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
arg 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false
   };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v0",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a0postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v5",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a1msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a1postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v15",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v0",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a0postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v5",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a1msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a1postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v15",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a161003461007a565b43815261003f61007a565b8151815260405161005790600090839060200161008d565b60408051601f1981840301815291905280516020909101206000555061009c9050565b6040518060200160405280600081525090565b91825251602082015260400190565b61024a806100ab6000396000f3fe6080604052600436106100295760003560e01c80632d13e3761461002e5780639532ef0114610043575b600080fd5b61004161003c3660046101bd565b610056565b005b6100416100513660046101bd565b6100d9565b60405161006a9060019083906020016101f6565b6040516020818303038152906040528051906020012060001c6000541461009057600080fd5b341561009b57600080fd5b7fc97ce2db2aa6ed1b2b407e37a42ffc34c2e8a799702eda5b99906e987a2833cf816040516100ca91906101df565b60405180910390a16000805533ff5b6040516100ed9060009083906020016101f6565b6040516020818303038152906040528051906020012060001c6000541461011357600080fd5b341561011e57600080fd5b7ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc1668160405161014d91906101df565b60405180910390a161015d610193565b438152604051610174906001908390602001610205565b60408051601f1981840301815291905280516020909101206000555050565b6040518060200160405280600081525090565b6000604082840312156101b7578081fd5b50919050565b6000604082840312156101ce578081fd5b6101d883836101a6565b9392505050565b813581526020918201359181019190915260400190565b91825235602082015260400190565b9182525160208201526040019056fea2646970667358221220d41d26a4dd5f6d8b8b7b8d8194e704b1c89772aff31084e3b6fd042fbc733aa264736f6c63430008000033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };


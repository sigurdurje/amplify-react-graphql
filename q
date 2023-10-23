warning: in the working copy of 'amplify/backend/storage/contentStore/cli-inputs.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'amplify/cli.json', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/amplify/backend/storage/contentStore/cli-inputs.json b/amplify/backend/storage/contentStore/cli-inputs.json[m
[1mindex 0da49ed..dc744f2 100644[m
[1m--- a/amplify/backend/storage/contentStore/cli-inputs.json[m
[1m+++ b/amplify/backend/storage/contentStore/cli-inputs.json[m
[36m@@ -5,7 +5,8 @@[m
   "storageAccess": "auth",[m
   "guestAccess": [],[m
   "authAccess": [[m
[31m-    "READ"[m
[32m+[m[32m    "READ",[m
[32m+[m[32m    "CREATE_AND_UPDATE"[m
   ],[m
   "triggerFunction": "NONE",[m
   "groupAccess": {}[m
[1mdiff --git a/amplify/cli.json b/amplify/cli.json[m
[1mindex 56c39f4..5298a7a 100644[m
[1m--- a/amplify/cli.json[m
[1m+++ b/amplify/cli.json[m
[36m@@ -1,61 +1,61 @@[m
 {[m
[31m-  "features": {[m
[31m-    "graphqltransformer": {[m
[31m-      "addmissingownerfields": true,[m
[31m-      "improvepluralization": false,[m
[31m-      "validatetypenamereservedwords": true,[m
[31m-      "useexperimentalpipelinedtransformer": true,[m
[31m-      "enableiterativegsiupdates": true,[m
[31m-      "secondarykeyasgsi": true,[m
[31m-      "skipoverridemutationinputtypes": true,[m
[31m-      "transformerversion": 2,[m
[31m-      "suppressschemamigrationprompt": true,[m
[31m-      "securityenhancementnotification": false,[m
[31m-      "showfieldauthnotification": false,[m
[31m-      "usesubusernamefordefaultidentityclaim": true,[m
[31m-      "usefieldnameforprimarykeyconnectionfield": false,[m
[31m-      "enableautoindexquerynames": true,[m
[31m-      "respectprimarykeyattributesonconnectionfield": true,[m
[31m-      "shoulddeepmergedirectiveconfigdefaults": false,[m
[31m-      "populateownerfieldforstaticgroupauth": true[m
[32m+[m[32m    "features": {[m
[32m+[m[32m        "graphqltransformer": {[m
[32m+[m[32m            "addmissingownerfields": true,[m
[32m+[m[32m            "improvepluralization": false,[m
[32m+[m[32m            "validatetypenamereservedwords": true,[m
[32m+[m[32m            "useexperimentalpipelinedtransformer": true,[m
[32m+[m[32m            "enableiterativegsiupdates": true,[m
[32m+[m[32m            "secondarykeyasgsi": true,[m
[32m+[m[32m            "skipoverridemutationinputtypes": true,[m
[32m+[m[32m            "transformerversion": 2,[m
[32m+[m[32m            "suppressschemamigrationprompt": true,[m
[32m+[m[32m            "securityenhancementnotification": false,[m
[32m+[m[32m            "showfieldauthnotification": false,[m
[32m+[m[32m            "usesubusernamefordefaultidentityclaim": true,[m
[32m+[m[32m            "usefieldnameforprimarykeyconnectionfield": false,[m
[32m+[m[32m            "enableautoindexquerynames": true,[m
[32m+[m[32m            "respectprimarykeyattributesonconnectionfield": true,[m
[32m+[m[32m            "shoulddeepmergedirectiveconfigdefaults": false,[m
[32m+[m[32m            "populateownerfieldforstaticgroupauth": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "frontend-ios": {[m
[32m+[m[32m            "enablexcodeintegration": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "auth": {[m
[32m+[m[32m            "enablecaseinsensitivity": true,[m
[32m+[m[32m            "useinclusiveterminology": true,[m
[32m+[m[32m            "breakcirculardependency": true,[m
[32m+[m[32m            "forcealiasattributes": false,[m
[32m+[m[32m            "useenabledmfas": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "codegen": {[m
[32m+[m[32m            "useappsyncmodelgenplugin": true,[m
[32m+[m[32m            "usedocsgeneratorplugin": true,[m
[32m+[m[32m            "usetypesgeneratorplugin": true,[m
[32m+[m[32m            "cleangeneratedmodelsdirectory": true,[m
[32m+[m[32m            "retaincasestyle": true,[m
[32m+[m[32m            "addtimestampfields": true,[m
[32m+[m[32m            "handlelistnullabilitytransparently": true,[m
[32m+[m[32m            "emitauthprovider": true,[m
[32m+[m[32m            "generateindexrules": true,[m
[32m+[m[32m            "enabledartnullsafety": true,[m
[32m+[m[32m            "generatemodelsforlazyloadandcustomselectionset": false[m
[32m+[m[32m        },[m
[32m+[m[32m        "appsync": {[m
[32m+[m[32m            "generategraphqlpermissions": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "latestregionsupport": {[m
[32m+[m[32m            "pinpoint": 1,[m
[32m+[m[32m            "translate": 1,[m
[32m+[m[32m            "transcribe": 1,[m
[32m+[m[32m            "rekognition": 1,[m
[32m+[m[32m            "textract": 1,[m
[32m+[m[32m            "comprehend": 1[m
[32m+[m[32m        },[m
[32m+[m[32m        "project": {[m
[32m+[m[32m            "overrides": true[m
[32m+[m[32m        }[m
     },[m
[31m-    "frontend-ios": {[m
[31m-      "enablexcodeintegration": true[m
[31m-    },[m
[31m-    "auth": {[m
[31m-      "enablecaseinsensitivity": true,[m
[31m-      "useinclusiveterminology": true,[m
[31m-      "breakcirculardependency": true,[m
[31m-      "forcealiasattributes": false,[m
[31m-      "useenabledmfas": true[m
[31m-    },[m
[31m-    "codegen": {[m
[31m-      "useappsyncmodelgenplugin": true,[m
[31m-      "usedocsgeneratorplugin": true,[m
[31m-      "usetypesgeneratorplugin": true,[m
[31m-      "cleangeneratedmodelsdirectory": true,[m
[31m-      "retaincasestyle": true,[m
[31m-      "addtimestampfields": true,[m
[31m-      "handlelistnullabilitytransparently": true,[m
[31m-      "emitauthprovider": true,[m
[31m-      "generateindexrules": true,[m
[31m-      "enabledartnullsafety": true,[m
[31m-      "generatemodelsforlazyloadandcustomselectionset": false[m
[31m-    },[m
[31m-    "appsync": {[m
[31m-      "generategraphqlpermissions": true[m
[31m-    },[m
[31m-    "latestregionsupport": {[m
[31m-      "pinpoint": 1,[m
[31m-      "translate": 1,[m
[31m-      "transcribe": 1,[m
[31m-      "rekognition": 1,[m
[31m-      "textract": 1,[m
[31m-      "comprehend": 1[m
[31m-    },[m
[31m-    "project": {[m
[31m-      "overrides": true[m
[31m-    }[m
[31m-  },[m
[31m-  "debug": {}[m
[32m+[m[32m    "debug": {}[m
 }[m
\ No newline at end of file[m

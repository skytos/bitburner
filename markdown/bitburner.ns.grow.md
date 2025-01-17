<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [bitburner](./bitburner.md) &gt; [NS](./bitburner.ns.md) &gt; [grow](./bitburner.ns.grow.md)

## NS.grow() method

Spoof money in a servers bank account, increasing the amount available.

<b>Signature:</b>

```typescript
grow(host: string, opts?: BasicHGWOptions): Promise<number>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  host | string | Hostname of the target server to grow. |
|  opts | [BasicHGWOptions](./bitburner.basichgwoptions.md) | Optional parameters for configuring function behavior. |

<b>Returns:</b>

Promise&lt;number&gt;

The number by which the money on the server was multiplied for the growth.

## Remarks

RAM cost: 0.15 GB

Use your hacking skills to increase the amount of money available on a server. The runtime for this command depends on your hacking level and the target server’s security level. When `grow` completes, the money available on a target server will be increased by a certain, fixed percentage. This percentage is determined by the target server’s growth rate (which varies between servers) and security level. Generally, higher-level servers have higher growth rates. The getServerGrowth() function can be used to obtain a server’s growth rate.

Like hack, `grow` can be called on any server, regardless of where the script is running. The grow() command requires root access to the target server, but there is no required hacking level to run the command. It also raises the security level of the target server by 0.004.

## Example


```ts
grow("foodnstuff");
grow("foodnstuff", { threads: 5 }); // Only use 5 threads to grow
```


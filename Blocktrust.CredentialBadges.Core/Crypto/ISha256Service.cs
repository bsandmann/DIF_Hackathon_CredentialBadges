﻿namespace Blocktrust.CredentialBadges.Core.Crypto;

public interface ISha256Service
{
    public byte[] HashData(byte[] encData);
}
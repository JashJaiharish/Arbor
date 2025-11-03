import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input, Card } from '../../components/ui';
import { colors, spacing } from '../../constants';

export default function SignupScreen() {
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password) return;

    setLoading(true);
    try {
      await login(name, email);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>🌿</Text>
          </View>
          <Text style={styles.title}>Join Arbor</Text>
          <Text style={styles.subtitle}>Start your growing journey</Text>
        </View>

        <Card style={styles.formContainer}>
          <Text style={styles.formTitle}>Create Account</Text>

          <Input
            label="Full Name"
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />

          <Input
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry
          />

          <Button
            title="Sign Up"
            onPress={handleSignup}
            loading={loading}
            style={styles.signupButton}
          />

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.quickSignupContainer}>
            <Button
              title="Google"
              onPress={() => router.replace('/(tabs)')}
              variant="outline"
              style={styles.quickSignupButton}
            />
            <Button
              title="Guest"
              onPress={() => router.replace('/(tabs)')}
              variant="outline"
              style={styles.quickSignupButton}
            />
          </View>

          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text
              style={styles.loginLink}
              onPress={() => router.replace('/auth/login')}
            >
              Login
            </Text>
          </Text>
        </Card>

        <Text style={styles.termsText}>
          By continuing, you agree to our Terms & Privacy Policy
        </Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logoContainer: {
    marginBottom: spacing.md,
  },
  logo: {
    fontSize: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.surface,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    color: colors.primaryLight,
    opacity: 0.9,
  },
  formContainer: {
    marginBottom: spacing.lg,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  signupButton: {
    marginBottom: spacing.lg,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: spacing.md,
    fontSize: 12,
    color: colors.textLight,
  },
  quickSignupContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  quickSignupButton: {
    flex: 1,
  },
  loginText: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'center',
  },
  loginLink: {
    color: colors.primary,
    fontWeight: '600',
  },
  termsText: {
    fontSize: 10,
    color: colors.primaryLight,
    textAlign: 'center',
    opacity: 0.8,
  },
});